# -*- ruby -*-

ignore /^_site/

guard 'jekyll' do
    watch /.+/
end

guard :shell, :all_on_start => true do
    watch 'asset/app.scss' do
        `make sass`
    end
end

guard 'livereload' do
    watch /.+/
end
